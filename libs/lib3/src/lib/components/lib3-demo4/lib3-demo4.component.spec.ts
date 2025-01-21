import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo4Component } from './lib3-demo4.component';

describe('Lib3Demo4Component', () => {
  let component: Lib3Demo4Component;
  let fixture: ComponentFixture<Lib3Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
