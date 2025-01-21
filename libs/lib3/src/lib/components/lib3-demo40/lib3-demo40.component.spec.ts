import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo40Component } from './lib3-demo40.component';

describe('Lib3Demo40Component', () => {
  let component: Lib3Demo40Component;
  let fixture: ComponentFixture<Lib3Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
