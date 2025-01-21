import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo46Component } from './lib4-demo46.component';

describe('Lib4Demo46Component', () => {
  let component: Lib4Demo46Component;
  let fixture: ComponentFixture<Lib4Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
