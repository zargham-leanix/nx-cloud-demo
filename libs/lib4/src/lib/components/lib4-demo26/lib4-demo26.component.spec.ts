import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo26Component } from './lib4-demo26.component';

describe('Lib4Demo26Component', () => {
  let component: Lib4Demo26Component;
  let fixture: ComponentFixture<Lib4Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
