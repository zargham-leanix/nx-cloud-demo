import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo10Component } from './lib3-demo10.component';

describe('Lib3Demo10Component', () => {
  let component: Lib3Demo10Component;
  let fixture: ComponentFixture<Lib3Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
