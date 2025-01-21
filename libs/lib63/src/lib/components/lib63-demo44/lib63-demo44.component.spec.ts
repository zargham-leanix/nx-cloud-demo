import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo44Component } from './lib63-demo44.component';

describe('Lib63Demo44Component', () => {
  let component: Lib63Demo44Component;
  let fixture: ComponentFixture<Lib63Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
