import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo14Component } from './lib24-demo14.component';

describe('Lib24Demo14Component', () => {
  let component: Lib24Demo14Component;
  let fixture: ComponentFixture<Lib24Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
