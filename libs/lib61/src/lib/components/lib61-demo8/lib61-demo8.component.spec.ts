import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo8Component } from './lib61-demo8.component';

describe('Lib61Demo8Component', () => {
  let component: Lib61Demo8Component;
  let fixture: ComponentFixture<Lib61Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
