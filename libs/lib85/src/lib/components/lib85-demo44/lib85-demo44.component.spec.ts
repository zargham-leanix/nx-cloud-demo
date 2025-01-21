import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo44Component } from './lib85-demo44.component';

describe('Lib85Demo44Component', () => {
  let component: Lib85Demo44Component;
  let fixture: ComponentFixture<Lib85Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
