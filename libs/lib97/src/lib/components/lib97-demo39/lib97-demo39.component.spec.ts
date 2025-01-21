import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo39Component } from './lib97-demo39.component';

describe('Lib97Demo39Component', () => {
  let component: Lib97Demo39Component;
  let fixture: ComponentFixture<Lib97Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
