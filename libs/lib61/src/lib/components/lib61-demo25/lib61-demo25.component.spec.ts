import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo25Component } from './lib61-demo25.component';

describe('Lib61Demo25Component', () => {
  let component: Lib61Demo25Component;
  let fixture: ComponentFixture<Lib61Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
