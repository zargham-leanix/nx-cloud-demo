import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo44Component } from './lib24-demo44.component';

describe('Lib24Demo44Component', () => {
  let component: Lib24Demo44Component;
  let fixture: ComponentFixture<Lib24Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
