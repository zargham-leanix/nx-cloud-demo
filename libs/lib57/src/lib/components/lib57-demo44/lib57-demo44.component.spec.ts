import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo44Component } from './lib57-demo44.component';

describe('Lib57Demo44Component', () => {
  let component: Lib57Demo44Component;
  let fixture: ComponentFixture<Lib57Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
