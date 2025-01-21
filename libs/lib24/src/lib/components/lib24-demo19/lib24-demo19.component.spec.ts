import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo19Component } from './lib24-demo19.component';

describe('Lib24Demo19Component', () => {
  let component: Lib24Demo19Component;
  let fixture: ComponentFixture<Lib24Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
