import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo8Component } from './lib4-demo8.component';

describe('Lib4Demo8Component', () => {
  let component: Lib4Demo8Component;
  let fixture: ComponentFixture<Lib4Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
