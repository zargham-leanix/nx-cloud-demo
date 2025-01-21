import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo23Component } from './lib4-demo23.component';

describe('Lib4Demo23Component', () => {
  let component: Lib4Demo23Component;
  let fixture: ComponentFixture<Lib4Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
