import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo46Component } from './lib1-demo46.component';

describe('Lib1Demo46Component', () => {
  let component: Lib1Demo46Component;
  let fixture: ComponentFixture<Lib1Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
