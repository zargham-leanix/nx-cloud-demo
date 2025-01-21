import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo39Component } from './lib34-demo39.component';

describe('Lib34Demo39Component', () => {
  let component: Lib34Demo39Component;
  let fixture: ComponentFixture<Lib34Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
