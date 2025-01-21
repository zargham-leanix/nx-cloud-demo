import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo13Component } from './lib3-demo13.component';

describe('Lib3Demo13Component', () => {
  let component: Lib3Demo13Component;
  let fixture: ComponentFixture<Lib3Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
