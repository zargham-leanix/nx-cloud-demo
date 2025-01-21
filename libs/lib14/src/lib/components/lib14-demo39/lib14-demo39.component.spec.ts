import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo39Component } from './lib14-demo39.component';

describe('Lib14Demo39Component', () => {
  let component: Lib14Demo39Component;
  let fixture: ComponentFixture<Lib14Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
