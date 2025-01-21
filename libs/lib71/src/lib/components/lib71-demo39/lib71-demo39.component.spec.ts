import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo39Component } from './lib71-demo39.component';

describe('Lib71Demo39Component', () => {
  let component: Lib71Demo39Component;
  let fixture: ComponentFixture<Lib71Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
