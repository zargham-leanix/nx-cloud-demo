import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo39Component } from './lib91-demo39.component';

describe('Lib91Demo39Component', () => {
  let component: Lib91Demo39Component;
  let fixture: ComponentFixture<Lib91Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
