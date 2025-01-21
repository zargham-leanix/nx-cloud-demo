import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo17Component } from './lib3-demo17.component';

describe('Lib3Demo17Component', () => {
  let component: Lib3Demo17Component;
  let fixture: ComponentFixture<Lib3Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
