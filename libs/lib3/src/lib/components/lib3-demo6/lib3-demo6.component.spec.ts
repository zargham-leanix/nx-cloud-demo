import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo6Component } from './lib3-demo6.component';

describe('Lib3Demo6Component', () => {
  let component: Lib3Demo6Component;
  let fixture: ComponentFixture<Lib3Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
