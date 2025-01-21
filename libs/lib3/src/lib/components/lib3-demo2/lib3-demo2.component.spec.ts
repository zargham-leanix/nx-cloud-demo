import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo2Component } from './lib3-demo2.component';

describe('Lib3Demo2Component', () => {
  let component: Lib3Demo2Component;
  let fixture: ComponentFixture<Lib3Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
