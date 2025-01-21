import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo32Component } from './lib3-demo32.component';

describe('Lib3Demo32Component', () => {
  let component: Lib3Demo32Component;
  let fixture: ComponentFixture<Lib3Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
