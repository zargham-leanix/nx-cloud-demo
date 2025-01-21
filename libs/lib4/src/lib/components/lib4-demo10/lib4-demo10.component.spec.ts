import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo10Component } from './lib4-demo10.component';

describe('Lib4Demo10Component', () => {
  let component: Lib4Demo10Component;
  let fixture: ComponentFixture<Lib4Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
