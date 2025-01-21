import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo39Component } from './lib19-demo39.component';

describe('Lib19Demo39Component', () => {
  let component: Lib19Demo39Component;
  let fixture: ComponentFixture<Lib19Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
