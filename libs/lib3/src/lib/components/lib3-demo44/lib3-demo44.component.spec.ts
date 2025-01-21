import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo44Component } from './lib3-demo44.component';

describe('Lib3Demo44Component', () => {
  let component: Lib3Demo44Component;
  let fixture: ComponentFixture<Lib3Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
