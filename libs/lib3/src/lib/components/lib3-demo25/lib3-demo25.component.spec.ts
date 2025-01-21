import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo25Component } from './lib3-demo25.component';

describe('Lib3Demo25Component', () => {
  let component: Lib3Demo25Component;
  let fixture: ComponentFixture<Lib3Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
