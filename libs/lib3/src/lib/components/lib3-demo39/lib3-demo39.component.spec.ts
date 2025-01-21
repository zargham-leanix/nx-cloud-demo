import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo39Component } from './lib3-demo39.component';

describe('Lib3Demo39Component', () => {
  let component: Lib3Demo39Component;
  let fixture: ComponentFixture<Lib3Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
