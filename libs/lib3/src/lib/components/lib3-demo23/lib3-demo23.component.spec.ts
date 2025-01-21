import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo23Component } from './lib3-demo23.component';

describe('Lib3Demo23Component', () => {
  let component: Lib3Demo23Component;
  let fixture: ComponentFixture<Lib3Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
