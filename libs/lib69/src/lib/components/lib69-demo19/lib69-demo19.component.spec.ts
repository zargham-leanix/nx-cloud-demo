import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo19Component } from './lib69-demo19.component';

describe('Lib69Demo19Component', () => {
  let component: Lib69Demo19Component;
  let fixture: ComponentFixture<Lib69Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
