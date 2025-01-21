import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo46Component } from './lib3-demo46.component';

describe('Lib3Demo46Component', () => {
  let component: Lib3Demo46Component;
  let fixture: ComponentFixture<Lib3Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
