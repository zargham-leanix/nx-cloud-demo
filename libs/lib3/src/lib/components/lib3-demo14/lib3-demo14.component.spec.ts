import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo14Component } from './lib3-demo14.component';

describe('Lib3Demo14Component', () => {
  let component: Lib3Demo14Component;
  let fixture: ComponentFixture<Lib3Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
