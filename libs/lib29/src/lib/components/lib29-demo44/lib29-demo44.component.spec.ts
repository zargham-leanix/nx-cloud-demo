import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo44Component } from './lib29-demo44.component';

describe('Lib29Demo44Component', () => {
  let component: Lib29Demo44Component;
  let fixture: ComponentFixture<Lib29Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
