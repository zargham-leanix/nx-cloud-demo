import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo44Component } from './lib61-demo44.component';

describe('Lib61Demo44Component', () => {
  let component: Lib61Demo44Component;
  let fixture: ComponentFixture<Lib61Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
