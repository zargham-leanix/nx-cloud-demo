import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo39Component } from './lib2-demo39.component';

describe('Lib2Demo39Component', () => {
  let component: Lib2Demo39Component;
  let fixture: ComponentFixture<Lib2Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
