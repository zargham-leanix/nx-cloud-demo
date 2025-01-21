import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo25Component } from './lib59-demo25.component';

describe('Lib59Demo25Component', () => {
  let component: Lib59Demo25Component;
  let fixture: ComponentFixture<Lib59Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
