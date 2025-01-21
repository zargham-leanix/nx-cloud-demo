import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo43Component } from './lib3-demo43.component';

describe('Lib3Demo43Component', () => {
  let component: Lib3Demo43Component;
  let fixture: ComponentFixture<Lib3Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
