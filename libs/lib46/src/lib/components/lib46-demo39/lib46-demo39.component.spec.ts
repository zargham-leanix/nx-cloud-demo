import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo39Component } from './lib46-demo39.component';

describe('Lib46Demo39Component', () => {
  let component: Lib46Demo39Component;
  let fixture: ComponentFixture<Lib46Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
