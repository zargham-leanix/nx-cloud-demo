import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo44Component } from './lib28-demo44.component';

describe('Lib28Demo44Component', () => {
  let component: Lib28Demo44Component;
  let fixture: ComponentFixture<Lib28Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
