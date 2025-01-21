import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo44Component } from './lib59-demo44.component';

describe('Lib59Demo44Component', () => {
  let component: Lib59Demo44Component;
  let fixture: ComponentFixture<Lib59Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
