import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo11Component } from './lib3-demo11.component';

describe('Lib3Demo11Component', () => {
  let component: Lib3Demo11Component;
  let fixture: ComponentFixture<Lib3Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
