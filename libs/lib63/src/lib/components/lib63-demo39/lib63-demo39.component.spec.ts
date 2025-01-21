import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo39Component } from './lib63-demo39.component';

describe('Lib63Demo39Component', () => {
  let component: Lib63Demo39Component;
  let fixture: ComponentFixture<Lib63Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
