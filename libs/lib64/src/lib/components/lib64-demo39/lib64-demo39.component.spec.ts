import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo39Component } from './lib64-demo39.component';

describe('Lib64Demo39Component', () => {
  let component: Lib64Demo39Component;
  let fixture: ComponentFixture<Lib64Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
