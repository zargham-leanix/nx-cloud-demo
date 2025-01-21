import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo39Component } from './lib13-demo39.component';

describe('Lib13Demo39Component', () => {
  let component: Lib13Demo39Component;
  let fixture: ComponentFixture<Lib13Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
