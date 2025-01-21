import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo25Component } from './lib4-demo25.component';

describe('Lib4Demo25Component', () => {
  let component: Lib4Demo25Component;
  let fixture: ComponentFixture<Lib4Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
