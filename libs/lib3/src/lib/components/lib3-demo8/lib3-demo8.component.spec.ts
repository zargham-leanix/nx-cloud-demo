import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo8Component } from './lib3-demo8.component';

describe('Lib3Demo8Component', () => {
  let component: Lib3Demo8Component;
  let fixture: ComponentFixture<Lib3Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
