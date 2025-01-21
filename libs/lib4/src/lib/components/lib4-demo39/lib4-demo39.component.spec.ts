import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo39Component } from './lib4-demo39.component';

describe('Lib4Demo39Component', () => {
  let component: Lib4Demo39Component;
  let fixture: ComponentFixture<Lib4Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
