import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo49Component } from './lib3-demo49.component';

describe('Lib3Demo49Component', () => {
  let component: Lib3Demo49Component;
  let fixture: ComponentFixture<Lib3Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
