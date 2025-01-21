import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo13Component } from './lib1-demo13.component';

describe('Lib1Demo13Component', () => {
  let component: Lib1Demo13Component;
  let fixture: ComponentFixture<Lib1Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
