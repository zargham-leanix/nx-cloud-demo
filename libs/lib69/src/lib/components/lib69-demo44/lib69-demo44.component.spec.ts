import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo44Component } from './lib69-demo44.component';

describe('Lib69Demo44Component', () => {
  let component: Lib69Demo44Component;
  let fixture: ComponentFixture<Lib69Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
