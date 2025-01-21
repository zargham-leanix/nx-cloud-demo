import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo39Component } from './lib61-demo39.component';

describe('Lib61Demo39Component', () => {
  let component: Lib61Demo39Component;
  let fixture: ComponentFixture<Lib61Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
